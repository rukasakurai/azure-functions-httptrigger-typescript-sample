import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));


    if (name) {
        const message:String = "Hello " + (req.query.name || req.body.name);
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: message
        };
        console.log(`message displayed: ${message}`);
        context.log.verbose(`message displayed: ${message}`);
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
        console.log('name was not passed in the http request');      
        context.log.warn('name was not passed in the http request');
    }
};

export default httpTrigger;

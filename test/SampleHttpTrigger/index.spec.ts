import { mock } from 'jest-mock-extended';
import { Context } from '@azure/functions';
import httpTrigger from "../../SampleHttpTrigger";

const mockContext = mock<Context>();
mockContext.log.warn = jest.fn();
mockContext.log.verbose = jest.fn();

test('"World" is passed as a name', async () => {
    const mockReq = {
        query: {
            name: 'World',
        },
    };

    await httpTrigger(mockContext, mockReq);
    expect(1).toEqual(1); // TODO: Add meaningful assertion
});

test('No name is passed in http request', async () => {
    const mockReq = {
        query: {
        },
    };

    await httpTrigger(mockContext, mockReq);
    expect(1).toEqual(1); // TODO: Add meaningful assertion
});
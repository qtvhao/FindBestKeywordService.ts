import type { PostFindBestKeywordResponse, GetFindBestKeywordResponse } from './types/findBestKeywordRouter.d.ts';
export declare class FindBestKeywordService {
    private apiClient;
    private readonly BASE_URL;
    constructor();
    /**
     * Starts a new find-best-keyword job with the given prompt.
     * @param prompt The prompt for which you want to find the best keyword.
     * @returns A Promise containing the job creation response, including the jobId.
     */
    startFindBestKeywordJob(prompt: string): Promise<PostFindBestKeywordResponse>;
    /**
     * Retrieves the status and result of a find-best-keyword job by jobId.
     * @param jobId The ID of the job you want to retrieve.
     * @returns A Promise containing the job status and result.
     */
    getFindBestKeywordJob(jobId: string): Promise<GetFindBestKeywordResponse>;
    /**
     * Polls the status of a find-best-keyword job until it is complete or a timeout is reached.
     * @param jobId The ID of the job you want to poll.
     * @param interval Time between polls in milliseconds (default: 3000ms)
     * @param timeout Maximum time to poll in milliseconds (default: 60000ms)
     * @returns A Promise containing the final job result or an error if it times out or fails.
     */
    pollFindBestKeywordJob(jobId: string, interval?: number, timeout?: number): Promise<string>;
    /**
     * Runs the full find-best-keyword job process: starts the job and polls until it completes.
     * @param prompt The prompt for which you want to find the best keyword.
     * @param interval Time between polls in milliseconds (default: 3000ms)
     * @param timeout Maximum time to poll in milliseconds (default: 60000ms)
     * @returns A Promise containing the final job result or an error.
     */
    runFindBestKeyword(prompt: string, interval?: number, timeout?: number): Promise<string>;
}

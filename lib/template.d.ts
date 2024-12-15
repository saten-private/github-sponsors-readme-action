import { ActionInterface, GitHubResponse, Status } from './constants';
/**
 * Fetches sponsors from the GitHub Sponsors API.
 */
export declare function getSponsors(action: ActionInterface): Promise<GitHubResponse>;
/**
 * Generates the sponsorship template.
 */
export declare function generateTemplate(response: GitHubResponse, action: ActionInterface, baseTemplate: string, tierPriceInDollars: number): string;
/**
 * Generates the updated file with the attached sponsorship template.
 */
export declare function generateFile(response: GitHubResponse, action: ActionInterface): Promise<Status>;

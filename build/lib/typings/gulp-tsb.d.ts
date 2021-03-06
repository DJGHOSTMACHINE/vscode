

declare module "gulp-tsb" {

	export interface ICancellationToken {
		isCancellationRequested(): boolean;
	}

	export interface IncrementalCompiler {
		(token?: ICancellationToken): NodeJS.ReadWriteStream;
		src(): NodeJS.ReadStream;
	}
	export function create(projectPath: string, existingOptions: any, verbose?: boolean, onError?: (message: any) => void): IncrementalCompiler;

}

export { }

declare global {
	type Nullable<T> = T | null

	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	type LyraSchema = {
		_id: 'number'
		name: 'string'
	}
}

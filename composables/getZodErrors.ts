import type { ZodIssue, ZodTypeAny } from 'zod'

export async function getZodErrors<T extends ZodTypeAny>(
    schema: T,
    data: any
): Promise<Record<string, string>> {
    const res = await schema.safeParseAsync(data)

    if (res.success) return {}
    return res.error.issues.reduce<Record<string, string>>((prev, currentIssue) => {
        prev[currentIssue.path.toString()] = currentIssue.message
        return prev
    }, {})
}
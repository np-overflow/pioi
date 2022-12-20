import type { ZodTypeAny } from 'zod'

export async function getZodError<T extends ZodTypeAny>(
    schema: T,
    data: any
): Promise<string> {
    const res = await schema.safeParseAsync(data)

    if (res.success) return ''
    return res.error.issues[0].message
}
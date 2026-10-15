import { z } from 'zod'

const IFormSheetScheme = z.object({
    categories: z.array(z.string())
})

export type IFormSheet = z.infer<typeof IFormSheetScheme>

export {
    IFormSheetScheme,
}
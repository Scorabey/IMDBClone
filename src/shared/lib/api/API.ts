import { app } from "@/shared"
import { ZodType, z } from "zod"

type Schemas<Titem extends ZodType, TCreate extends ZodType, TList extends ZodType> = {
    item: Titem
    create:  TCreate
    list: TList
}

export class API<
    TItem extends ZodType,
    TCreate extends ZodType,
    TList extends ZodType
> {
    constructor(
        private readonly endpoint: string,
        private readonly schemas: Schemas<TItem, TCreate, TList>
    ) {}

    #querys(limit: number, page: number, query: string) {
        return `?limit=${limit}&page=${page}&${query}`
    }

    #validation(dto: z.infer<TCreate>) {
        const result = this.schemas.create.safeParse(dto)
        if(!result.success) throw result.error
    }

    async getAll(limit: number = 20, page: number = 1, query: string = ""): Promise<z.infer<TList>> {
        const { data } = await app.get(`${this.endpoint}${this.#querys(limit, page, query)}`)
        return this.schemas.list.parse(data)
    }

    async getById(id: number): Promise<z.infer<TItem>> {
        const { data } = await app.get(`${this.endpoint}/${id}`)
        return this.schemas.item.parse(data)
    }

    async create(dto: z.infer<TCreate>): Promise<z.infer<TItem>> {
        this.#validation(dto)

        const { data } = await app.post(`${this.endpoint}`, dto)
        return this.schemas.item.parse(data)
    }

    async update(dto: z.infer<TCreate>, id: number): Promise<z.infer<TItem>> {
        this.#validation(dto)

        const { data } = await app.put(`${this.endpoint}/${id}`, dto)
        return this.schemas.item.parse(data)
    }

    async delete(id: number): Promise<z.infer<TItem>> {
        const { data } = await app.delete(`${this.endpoint}/${id}`)
        return this.schemas.item.parse(data)
    }
}
import { app } from "@/shared"
import { ZodType, z } from "zod"

type Schemas<TItem extends ZodType, TCreate extends ZodType, TList extends ZodType> = {
    item: TItem
    create:  TCreate
    list: TList
}

interface Query {
    limit?: number
    page?: number
    categories?: string[]
    search?: string
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

    #querys({ limit, page, categories, search }: Query) {
        const params = new URLSearchParams();
        if(search?.trim()) params.set("search", search)
        params.set("limit", String(limit))
        params.set("page", String(page))
        categories?.forEach((category) => params.append("filterBy", category))
        return `?${params}`
    }

    #validation(dto: z.infer<TCreate>) {
        const result = this.schemas.create.safeParse(dto)
        if(!result.success) throw result.error
    }

    async getAll({limit = 20, page = 1, categories = [], search = ""}: Query): Promise<z.infer<TList>> {
        const { data } = await app.get(`${this.endpoint}${this.#querys({limit, page, categories, search})}`)
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
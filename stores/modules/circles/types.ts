export interface Image extends ApiResponse {
    id: number
    goodId: number
    path: string
    createdAt: Date
    updatedAt: Date
}

export interface Goods extends ApiResponse {
    id: number
    name: string
    price: number
    circleId: number
    createdBy: number
    isNew: boolean
    createdAt: Date
    updatedAt: Date
    image: Image | boolean
}

export interface Circle extends ApiResponse {
    id: number
    name: string
    penName: string
    spaceName: string
    twitter: string
    circleCut?: string
    goods: Goods[]
    updatedAt: Date
    createdAt: Date
}

export type ApiResponse = Record<string, any>

export enum CirclesActionTypes {

}

export interface CirclesState {
    readonly isFetching: false
    readonly circles: Circle[]
    readonly errors?: string
}


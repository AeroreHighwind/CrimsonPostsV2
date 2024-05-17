import 'reflect-metadata'

export const MODEL_NAME = "MODEL_NAME"
export function ModelName(val: { name: string }) {
    return (constructor: any) => {
        Reflect.defineMetadata(MODEL_NAME, val.name, constructor, MODEL_NAME)
    }
}
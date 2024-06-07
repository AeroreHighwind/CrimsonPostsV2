import 'reflect-metadata'
import { MODEL_NAME } from '../decorators/model-name';

export class BaseModel {
    public static getModelName() {
        return Reflect.getMetadata(MODEL_NAME, this, MODEL_NAME);
    }
}
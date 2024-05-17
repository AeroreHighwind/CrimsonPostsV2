import { BaseModel } from "../classes/base-model.class";
import { ModelName } from "../decorators/model-name";

@ModelName({ name: 'user-profiles' })
export class UserProfileModel extends BaseModel {
    displayName: string = '';
    img: string = '';
    userId: number = 0;
}
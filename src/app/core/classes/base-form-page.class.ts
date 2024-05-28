import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { NotificationService } from "../services/notification.service";
import { FirestoreManager } from "./firestore-manager.class";
import { BaseModel } from "./base-model.class";


export abstract class BaseFormPage {
    private _formGroup!: FormGroup
    private _formGroupValidators?: Validators[]
    private _errorMatcher = new ErrorStateMatcher()
    private _modelClass!: typeof BaseModel;

    constructor(
        private __fb: FormBuilder,
        private __notifications: NotificationService,
        private __firestoreManager: FirestoreManager) {
    }

    protected async submit(event: any) {
        if (this._formGroup.invalid) {
            this.__notifications.errorNotification("Submitted data is invalid")
            return
        }
        if (event.id) return this.firestore.update(this.modelClass, event.id, event)

        return this.firestore.create(this.modelClass, event);
    }

    get formBuilder() {
        return this.__fb;
    }

    get errorMatcher() {
        return this._errorMatcher;
    }

    get formGroup() {
        return this._formGroup
    }

    set formGroup(group: FormGroup) {
        this._formGroup = group;
    }

    get contols() {
        return this._formGroup.controls
    }

    get firestore() {
        return this.__firestoreManager
    }

    get modelClass() {
        return this._modelClass;
    }

    set modelClass(modelClass: typeof BaseModel) {
        this._modelClass = modelClass;
    }

}
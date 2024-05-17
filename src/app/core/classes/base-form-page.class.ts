import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { NotificationService } from "../services/notification.service";
import { FirestoreManager } from "./firestore-manager.class";


export abstract class BaseFormPage {
    private _formGroup!: FormGroup
    private _errorMatcher = new ErrorStateMatcher()

    constructor(
        private __fb: FormBuilder,
        private __notifications: NotificationService,
        private __firestoreManager: FirestoreManager) {
    }

    protected async submit(event: any) {
        if (this._formGroup.invalid) {
            this.__notifications.triggerNotification("Error")
            return
        }
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

}
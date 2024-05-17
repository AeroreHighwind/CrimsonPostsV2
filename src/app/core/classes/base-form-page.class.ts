import { FormBuilder, FormControl } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";



export abstract class BaseFormPage {
    protected formControls!: FormControl[]
    protected errorMatcher = new ErrorStateMatcher()

    constructor(private _fb: FormBuilder) {

    }
}
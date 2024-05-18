import { Firestore, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { CollectionReference, DocumentData, DocumentReference, DocumentSnapshot, WithFieldValue, addDoc, getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { BaseModel } from './base-model.class';

@Injectable({ providedIn: 'root' })
export class FirestoreManager {
    private _firestore = inject(Firestore)

    public async create<T extends DocumentData>(model: typeof BaseModel, dto: WithFieldValue<T>) {
        const collectionRef = collection(this._firestore, model.getModelName()) as CollectionReference<T>;
        return addDoc(collectionRef, dto);
    }

    public async update<T extends DocumentData>(model: typeof BaseModel, id: string, dto: WithFieldValue<T>): Promise<void> {
        const docRef = doc(this._firestore, `${model.getModelName()}/${id}`) as DocumentReference<T>;
        return updateDoc(docRef, dto);
    }

    public async findOne<T>(model: typeof BaseModel, id: string): Promise<DocumentSnapshot> {
        const docRef = doc(this._firestore, `${model.getModelName()}/${id}`)
        return await getDoc(docRef)
    }

    public findAll<T>(model: typeof BaseModel): Observable<T[]> {
        const collectionRef = collection(this._firestore, model.getModelName())
        return collectionData(collectionRef, { idField: 'id' }) as Observable<T[]>;
    }

    public async remove(model: typeof BaseModel, id: string): Promise<void> {
        const docRef = doc(this._firestore, `${model.getModelName()}/${id}`)
        return await deleteDoc(docRef)
    }

}

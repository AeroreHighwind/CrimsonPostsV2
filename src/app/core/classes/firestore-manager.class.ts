import { Firestore, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { CollectionReference, DocumentData, DocumentReference, addDoc, getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';


export abstract class FirestoreManager {
    protected _collectionRef: CollectionReference<DocumentData, DocumentData>
    protected _collectionName: string;

    constructor(private _firestore: Firestore, collectionName: string) {
        this._collectionName = collectionName
        this._collectionRef = collection(this._firestore, collectionName)
    }

    protected async create<T>(dto: any): Promise<DocumentReference<any, DocumentData>> {
        return addDoc(this._collectionRef, dto);
    }

    protected async update<T>(id: string, dto: any): Promise<void> {
        const docRef = doc(this._firestore, `${this._collectionName}/${id}`)
        return updateDoc(docRef, { ...dto });
    }

    protected async findOne<T>(id: string) {
        const docRef = doc(this._firestore, `${this._collectionName}/${id}`)
        return await getDoc(docRef)
    }

    protected findAll<T>(): Observable<T[]> {
        return collectionData(this._collectionRef, { idField: 'id' }) as Observable<T[]>;
    }

    protected async remove<T>(id: string): Promise<void> {
        const docRef = doc(this._firestore, `${this._collectionName}/${id}`)
        return await deleteDoc(docRef)
    }

}

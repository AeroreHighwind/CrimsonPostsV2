import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { CollectionReference, DocumentData, DocumentReference, addDoc, getDoc } from 'firebase/firestore';


export class FirestoreManager {
    private _collectionRef: CollectionReference<DocumentData, DocumentData>
    private _collectionName: string;

    constructor(private _firestore: Firestore, collectionName: string) {
        this._collectionName = collectionName
        this._collectionRef = collection(this._firestore, collectionName)
    }

    async create<T>(dto: any): Promise<DocumentReference<any, DocumentData>> {
        return addDoc(this._collectionRef, dto);
    }

    async update<T>(id: string, dto: any): Promise<void> {
        const docRef = doc(this._firestore, `${this._collectionName}/${id}`)
        return updateDoc(docRef, { ...dto });
    }

    async findOne<T>(id: string) {
        const docRef = doc(this._firestore, `${this._collectionName}/${id}`)
        return await getDoc(docRef)
    }

    findAll<T>(): Observable<T[]> {
        return collectionData(this._collectionRef, { idField: 'id' }) as Observable<T[]>;
    }

    async remove<T>(id: string): Promise<void> {
        const docRef = doc(this._firestore, `${this._collectionName}/${id}`)
        return await deleteDoc(docRef)
    }

}

import {TodoCategory} from "./todo-category";
import {Person} from "./person";

export class TodoItem {
    public ID: number;
    public Title: string;
    public Description: string;
    public Categories: TodoCategory[];
    public DueDate: any;
    public Priority: number;
    public People: Person[];
    public MetaLinks: any[]; // used for hyperlinks, images, etc.
}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { NoticeComponent } from "./notice.component";

@NgModule({
    imports: [IonicModule,CommonModule],
    declarations: [NoticeComponent],
    exports: [NoticeComponent]
})
export class NoticeModule {}
import { NgModule } from '@angular/core';

import { CadastroSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CadastroSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CadastroSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CadastroSharedCommonModule {}

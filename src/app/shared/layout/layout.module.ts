import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardRoutingModule } from 'src/app/pages/dashboard/dashboard-routing.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [HeaderComponent, FooterComponent,SidebarComponent],
})
export class LayoutModule {}

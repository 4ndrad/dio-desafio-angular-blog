import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeFooterComponent } from './pages/home/home-footer/home-footer.component';
import { HomeMenuComponent } from './pages/home/home-menu/home-menu.component';
import { HomeArticleTwoComponent } from './pages/home/home-article-two/home-article-two.component';
import { HomeArticleOneComponent } from './pages/home/home-article-one/home-article-one.component';
import { HomeArticleOthersComponent } from './pages/home/home-article-others/home-article-others.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigCardComponent,
    MenuTitleComponent,
    SmallCardComponent,
    HomeComponent,
    FooterComponent,
    HomeFooterComponent,
    HomeMenuComponent,
    HomeArticleTwoComponent,
    HomeArticleOneComponent,
    HomeArticleOthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

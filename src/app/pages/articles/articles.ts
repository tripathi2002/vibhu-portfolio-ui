import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES, formatArticleDate } from '../../core/data/articles.data';

@Component({
  selector: 'app-articles',
  imports: [RouterLink],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
})
export class Articles {
  protected readonly articles = ARTICLES;
  protected readonly formatDate = formatArticleDate;
}

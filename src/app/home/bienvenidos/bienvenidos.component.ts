import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/interfaces/tile';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent implements OnInit {

  constructor() { }

  tiles: Tile[] = [
    {cols: 2, rows: 3, color: '', text: 'https://concepto.de/wp-content/uploads/2019/04/dise%C3%B1o-arquitectonico-e1555880833400.jpg'},
    {cols: 2, rows: 2, color: '', text: 'https://www.business.hsbc.com.ar/-/media/media/argentina/images/articles/perspectivas-del-comercio-internacional.jpg?h=727&iar=0&w=1511&hash=80349A408B2925B74935C66A19DF6BBD' },
    {cols: 2, rows: 1, color: '', text: 'https://massanadotcomdotmx.files.wordpress.com/2019/07/20.jpg?w=890' },
    {cols: 1, rows: 2, color: '', text: 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/2022-11/compras-compulsivas_0.jpg.webp?itok=lgDZJ1Zc'},
    {cols: 3, rows: 4, color: '', text: 'https://cdn-3.expansion.mx/dims4/default/a5f9695/2147483647/strip/true/crop/8409x5945+0+0/resize/1200x848!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fd8%2F15%2F97756b4a444287dbf850dee43121%2Fistock-1292443598.jpg'},
    {cols: 1, rows: 2, color: '', text: 'https://www.argentinaproduct.com/ckfinder/userfiles/files/blog/ideaoct.jpg' },
    {cols: 3, rows: 5, color: '', text: 'https://blogs.iadb.org/ideas-que-cuentan/wp-content/uploads/sites/11/2019/10/Comercio-internacional-Am%C3%A9rica-Latina-Caribe.jpg' },
    {cols: 1, rows: 2, color: '', text: 'https://www.cronista.com/files/image/160/160425/5ff7db1f222da.jpg' },
    {cols: 1, rows: 1, color: '', text: 'https://www.unotv.com/uploads/2022/06/celular-espacio-090914.jpg' },
    {cols: 1, rows: 2, color: '', text: 'https://conceptodefinicion.de/wp-content/uploads/2021/01/tecnologia-.jpg' },
  ];

  ngOnInit(): void {
  }

}

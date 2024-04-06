
# Manga Scraping Api Node Js

halo ini adalah project terbaru saya. project scraping web Manga dengan Node Js cheerio dan axios.

baca dokumentasi sebelum menggunakan ya.

# Step penggunaan
 luncurkan git clone https://github.com/JuniorDeveloper17/api-komik-scraping-node-js.git

 run nmp install axios  -  run mpm install cheerio - run npm install express - run npm install body-parser

 kemudian jalanlan jalankan node index.js dan buka di localhsot 3000

 dan kunjungi repository saya untuk aplikasi komiko dan ubah base url menjadi alamat ip komputer kamu 
 link repo https://github.com/JuniorDeveloper17/flutter-app-komiko




## API Reference

#### komik popular

```http
  GET /terpopular
```

| Parameter | Type     
| :-------- | :------- 
| `none ` | `string` | 

#### komik berwarna

```http
  GET /berwarna
```

| Parameter | Type     
| :-------- | :------- 
| `none ` | `string` | 

#### komik romantis

```http
  GET /romantis
```

| Parameter | Type     
| :-------- | :------- 
| `none ` | `string` | 

#### komik isekai

```http
  GET /isekai
```

| Parameter | Type     
| :-------- | :------- 
| `none ` | `string` |

#### komik fantasi

```http
  GET /fantasi
```


| Parameter | Type     
| :-------- | :------- 
| `none ` | `string` |

#### komik aksi

```http
  GET /aksi
```

| Parameter | Type     
| :-------- | :------- 
| `none ` | `string` |

#### komik terbaru

```http
  GET /terbaru
```

| Parameter | Type     
| :-------- | :------- 
| `none ` | `string` |

#### daftar genre

```http
  GET /genre
```

| Parameter | Type       
| :-------- | :------- 
| `none ` | `string` |

#### daftar tema

```http
  GET /tema
```

| Parameter | Type     
| :-------- | :------- 
| `none ` | `string` |


#### komik popular dengan page

```http
  GET /populars/:page
```


#### komik berwarna dengan page

```http
  GET /berwarnas/:page
```

#### komik genre dengan page

```http
  GET /genres/:key/:page
```


#### komik tipe dengan page

```http
  GET /types/:key/:page
```

#### komik tema dengan page

```http
  GET /temas/:key/:page
```

#### cari komik 

```http
  GET /search/:key
```

#### detail komik 

```http
  GET /detail/:urls
```
#### baca komik 

```http
  GET /baca/:urls
```
## Ingin Berkontribusi dengan saya?

Hubungi saya email ryanxxjr@gmail.com 


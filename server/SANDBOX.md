## Models + Migrations

<!-- User -->

`npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,role:enum,delete:boolean`

<!-- Products -->

`npx sequelize-cli model:generate --name Products --attributes title:string,brand:string,year:integer,kiloMeter:integer,grade:integer,category:string,photoProducts:array,description:string,delete:boolean`

<!-- Profile -->

`npx sequelize-cli model:generate --name Profile --attributes fullName:string,birthDate:date,city:string,country:string,mobilePhone:string,profilePicture:string,delete:boolean`

<!-- Wishlist -->

`npx sequelize-cli model:generate --name Wishlist --attributes UserId:integer,ProductId:integer`

<!-- About -->

`npx sequelize-cli model:generate --name About --attributes title:string,content:string`

## Seed

`npx sequelize-cli seed:generate --name user`
`npx sequelize-cli seed:generate --name profile`
`npx sequelize-cli seed:generate --name product`
`npx sequelize-cli seed:generate --name about`
`npx sequelize-cli seed:generate --name wishlist`

import { DataSource } from "typeorm";
// import { User } from "./entities/User.entity";
// import { DataProvinsi } from "./entities/DataProv.entity";
// import { Partai } from "./entities/Partai.entity";

const dataSource  = new DataSource({
    type : "postgres",
    host : "localhost",
    port : 5432,
    username : "postgres",
    password : "085321",
    database : "LatihanCallAPI",
    logging : false,
    synchronize: true,
    // entities: [DataProvinsi,User,Partai]
    entities: ["./src/entities/*.ts"]
})



export default dataSource
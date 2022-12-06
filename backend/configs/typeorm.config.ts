import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeORMConfig : TypeOrmModuleOptions = {

    type: 'postgres',
    host: process.env.POSTGRESQL_HOST,
    port: 5432,
    username: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_ROOT_PASSWORD,
    database: process.env.POSTGRESQL_DATABASE,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
    
}
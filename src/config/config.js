module.exports={
    
        user: 'sa',
        password: '1234',
        server:'DESKTOP-0JEQGHT',
        database: 'demo' ,
        synchronize: true,
        port:"1433",
        trustServerCertificate: true,
        dialect: "mssql",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
 
}
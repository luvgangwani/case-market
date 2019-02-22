// Enter project configurations (port, host, database configurations) in this file 
const env = process.env 

export default { 
	nodeEnv : env.NODE_ENV || "development", 
	port : env.PORT || 3000, 
	host : env.HOST || '0.0.0.0', 
}
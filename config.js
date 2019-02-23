// Enter project configurations (port, host, database configurations) in this file 
import path from 'path';

const env = process.env 

export default { 
	nodeEnv : env.NODE_ENV || "development", 
	port : env.PORT || 5000, 
	host : env.HOST || '0.0.0.0',
	clientsFile: path.resolve("data","clients.json"),
	lawyersFile: path.resolve("data","lawyers.json"),
	lawyersRatesFile: path.resolve("data","lawyers_rates.json"),
	specializationFile: path.resolve("data","specializations.json"),
	organizationsFile: path.resolve("data", "organizations.json"),
	stopwordsFile: path.resolve("data","stopwords.json")
}
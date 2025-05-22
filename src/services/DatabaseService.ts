import { PGliteWorker } from '@electric-sql/pglite/worker';

let db: PGliteWorker | null = null;

const initSchema = async (database: PGliteWorker) => {
    // ✅ Create table if it doesn't exist
    await database.query(`
    CREATE TABLE IF NOT EXISTS patients (
      id SERIAL PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      date_of_birth TEXT NOT NULL,
      gender TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      address TEXT,
      city TEXT,
      state TEXT,
      postalCode TEXT,
      insurance_provider TEXT,
      insurance_id TEXT,
      allergies TEXT,
      past_medical_history TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

    await database.query(`
    CREATE INDEX IF NOT EXISTS idx_patient_name ON patients (last_name, first_name);
  `);

    console.log("✅ Database schema initialized (without dropping existing data)");
};


export const initDatabase = async (): Promise<PGliteWorker> => {
    if (!db) {
        try {
            const workerInstance = new Worker(new URL('/pglite-worker.js', import.meta.url), {
                type: 'module',
            });
            db = new PGliteWorker(workerInstance);
            await initSchema(db);
        } catch (error) {
            console.error("Failed to initialize database:", error);
            throw error;
        }
    }
    return db;
};

export const registerPatient = async (patientData: any): Promise<any> => {
    const database = await initDatabase();
    const {
        first_name,
        last_name,
        date_of_birth,
        gender,
        email,
        phone,
        address,
        city,
        state,
        postalCode,
        insurance_provider,
        insurance_id,
        allergies,
        past_medical_history,
    } = patientData;

    const result = await database.query(
        `INSERT INTO patients 
      (first_name, last_name, date_of_birth, gender, email, phone, address, city, state, postalCode, insurance_provider, insurance_id, allergies, past_medical_history) 
     VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
     RETURNING id`,
        [
            first_name,
            last_name,
            date_of_birth,
            gender,
            email || null,
            phone || null,
            address || null,
            city || null,
            state || null,
            postalCode || null,
            insurance_provider || null,
            insurance_id || null,
            allergies || null,
            past_medical_history || null,
        ]
    );

    return result.rows?.[0];
};

export const getAllPatients = async (): Promise<any[]> => {
    const database = await initDatabase();
    try {
        const result = await database.query(
            "SELECT * FROM patients ORDER BY last_name, first_name"
        );
        return result.rows || [];
    } catch (error) {
        console.error('Error executing getAllPatients query:', error);
        throw error;
    }
};

export const searchPatientsByName = async (
    searchTerm: string
): Promise<any[]> => {
    const database = await initDatabase();
    try {
        const result = await database.query(
            `SELECT * FROM patients
       WHERE first_name ILIKE $1 OR last_name ILIKE $2
       ORDER BY last_name, first_name`,
            [`%${searchTerm}%`, `%${searchTerm}%`]
        );
        return result.rows || [];
    } catch (error) {
        console.error('Error executing searchPatientsByName query:', error);
        throw error;
    }
};

export const executeQuery = async (
    sqlQuery: string,
    params: any[] = []
): Promise<any> => {
    try {
        const database = await initDatabase();
        const result = await database.query(sqlQuery, params);
        return { success: true, data: result.rows || [], error: null };
    } catch (error: any) {
        console.error("Query execution error:", error);
        return {
            success: false,
            data: [],
            error: error.message || "An error occurred while executing the query",
        };
    }
};


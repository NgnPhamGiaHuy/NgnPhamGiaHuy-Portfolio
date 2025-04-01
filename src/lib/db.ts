import Database from "better-sqlite3";

const db = new Database("database.sqlite");

// Users table
db.prepare(
  `
		CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			bio TEXT NOT NULL,
			full_name TEXT NOT NULL,
			avatar_url TEXT,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
			updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
		)
	`
).run();

// Contacts table
db.prepare(
  `
		CREATE TABLE IF NOT EXISTS contacts (
		    id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            location TEXT,
            website TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
		)
	`
).run();

// Social Profiles table
db.prepare(
  `
		CREATE TABLE IF NOT EXISTS social_profiles (
		    id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            platform TEXT NOT NULL,
            url TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
		)
	`
).run();

// Portfolio table
db.prepare(
  `
        CREATE TABLE IF NOT EXISTS portfolios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            category TEXT NOT NULL,
            description TEXT,
            image_url TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
    `
).run();

// Services table
db.prepare(
  `
        CREATE TABLE IF NOT EXISTS services (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            description TEXT,
            price_range TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
    `
).run();

// Skills table
db.prepare(
  `
		CREATE TABLE IF NOT EXISTS skills (
		    id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            category TEXT,
            proficiency_level INTEGER CHECK (proficiency_level BETWEEN 1 AND 5),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
		)
	`
).run();

// Education table
db.prepare(
  `
		CREATE TABLE IF NOT EXISTS educations (
		    id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            school_name TEXT NOT NULL,
            school_url TEXT,
            degree_title TEXT NOT NULL,
            field_of_study TEXT,
            start_date DATE NOT NULL,
            end_date DATE,
            achievements TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
		)
	`
).run();

// Project table
db.prepare(
  `
		CREATE TABLE IF NOT EXISTS projects (
		    id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            description TEXT,
            project_url TEXT,
            github_url TEXT,
            technologies TEXT,
            start_date DATE,
            end_date DATE,
            status TEXT CHECK (status IN ('completed', 'in_progress', 'planned')),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
		)
	`
).run();

// Experience table
db.prepare(
  `
        CREATE TABLE IF NOT EXISTS experiences (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            company_name TEXT NOT NULL,
            company_url TEXT,
            position_title TEXT NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE,
            location TEXT,
            description TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
    `
).run();

// Certificate table
db.prepare(
  `
        CREATE TABLE IF NOT EXISTS certificates (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            issuing_organization TEXT NOT NULL,
            issue_date DATE NOT NULL,
            expiry_date DATE,
            certificate_url TEXT,
            certificate_id TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
    `
).run();

// FAQs table
db.prepare(
  `
        CREATE TABLE IF NOT EXISTS faqs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        question TEXT NOT NULL,
        answer TEXT NOT NULL,
        category TEXT,
        display_order INTEGER DEFAULT 0,
        is_active BOOLEAN DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `
).run();

// Create indexes for better performance
db.prepare(
  `CREATE INDEX IF NOT EXISTS idx_contacts_user_id ON contacts(user_id)`
).run();
db.prepare(
  `CREATE INDEX IF NOT EXISTS idx_social_profiles_user_id ON social_profiles(user_id)`
).run();
db.prepare(
  `CREATE INDEX IF NOT EXISTS idx_portfolios_user_id ON portfolios(user_id)`
).run();
db.prepare(
  `CREATE INDEX IF NOT EXISTS idx_services_user_id ON services(user_id)`
).run();
db.prepare(
  `CREATE INDEX IF NOT EXISTS idx_skills_user_id ON skills(user_id)`
).run();
db.prepare(
  `CREATE INDEX IF NOT EXISTS idx_educations_user_id ON educations(user_id)`
).run();
db.prepare(
  `CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id)`
).run();
db.prepare(
  `CREATE INDEX IF NOT EXISTS idx_experiences_user_id ON experiences(user_id)`
).run();
db.prepare(
  `CREATE INDEX IF NOT EXISTS idx_certificates_user_id ON certificates(user_id)`
).run();
db.prepare(
  `CREATE INDEX IF NOT EXISTS idx_faqs_user_id ON faqs(user_id)`
).run();

export default db;

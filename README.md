# NextGenSchool

**NextGenSchool** is a modern **School Management System** designed with a modular architecture.  
The goal is to build a **core system** (users, roles, schools, classes, students) and extend it with **functional modules** (e.g., School Health, Attendance, Reports).  

## 🚀 Status
- [x] Project initialized  
- [ ] Core development (user, role, school, class, student)  
- [ ] Login with phone number + OTP (currently via email, future: switchable to SMS)  
- [ ] School Health module (MVP)  
- [ ] SRS documentation  

## 📂 Project Structure (planned)
```plaintext
NextGenSchool/
├── src/                 # Main source code
│   ├── Core/            # Core: User, Role, School, Class, Module registry
│   ├── Modules/         # Extendable modules
│   │   └── Health/      # School Health module
│   └── Api/             # Web API
├── docs/                # Documentation (SRS, guides)
├── tests/               # Unit / Integration tests
└── README.md            # This file

```
## 🔑 Initial Features
- **Core**
  - Login with **phone number** as identifier.  
  - OTP delivery: **email first**, with future option to switch between **email or SMS**.  
  - Manage User, Role, School, Class, Student.  
  - Module registration and management system.  

- **First module: School Health**
  - Parents send medication requests.  
  - Requests can be approved or rejected.  
  - Log medication administration for students.  
  - Basic statistics and reporting.  

## 🛠️ Technologies
- **Backend:** .NET 8 (C#), WebAPI  
- **Frontend:** React + TailwindCSS + shadcn/ui  
- **Database:** SQL Server (extensible to PostgreSQL/MySQL)  
- **Auth:** Phone number + OTP (via email, future: SMS switch)  

## 📖 Documentation
- [SRS (Software Requirement Specification)](docs/SRS.md) — _in progress_  

## 🤝 Commit Guidelines (suggested)
- `feat: ...` add a new feature  
- `fix: ...` bug fix  
- `docs: ...` documentation update  
- `refactor: ...` code changes that don’t add features or fix bugs  
- `chore: ...` config, dependencies, build, or misc tasks  
- `update: ...` (optional, for general updates if not following strict conventional commits)  

## 📅 Short-term Roadmap
1. Build the core (User, Role, School, Class, Student).  
2. Implement login with phone number + OTP (email first, SMS switch planned).  
3. Develop the School Health module (MVP).  
4. Write SRS documentation in parallel with development.  

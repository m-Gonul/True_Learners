# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Security
- **Migrated password hashing from SHA256 to bcrypt** - Significantly improved password security by implementing industry-standard bcrypt hashing algorithm with salt rounds
- Enhanced protection against rainbow table and brute-force attacks

### Changed
- Updated authentication flow to support bcrypt password verification
- Modified user registration process to use bcrypt for password storage
- Updated password comparison logic in login functionality

### Added
- Added bcrypt dependency to project
- Implemented password hashing utility functions
- Added migration support for existing user passwords

### Fixed
- Improved error handling in authentication middleware
- Fixed potential security vulnerabilities in password storage

### Documentation
- Updated setup instructions to include bcrypt installation
- Added security best practices documentation

---

## [1.0.0] - 2024-12-03

### Added
- Initial project setup
- Basic user authentication system
- User registration and login functionality
- Database integration

### Security
- Initial password hashing implementation (SHA256)

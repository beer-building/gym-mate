## 🚀 Getting started

### 1. Clone repository and install dependencies

```bash
git clone https://github.com/beer-building/gym-mate.git
cd gym-mate
pnpm i
```

### 2. Generate prisma types

```
pnpm prisma generate
```

### 3. Start docker

```
docker-compose up --build
```

### 3. Create seed data

```
npx prisma db seed
```

### 4. Start frontend && backend

```
pnpm dev
```

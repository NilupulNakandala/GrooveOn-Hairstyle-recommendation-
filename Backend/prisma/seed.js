const db = require('../db')

async function main() {
  console.log('seed!')
}

async () => {
  try {
  } catch (e) {
    console.error(e)
  } finally {
    await db.$disconnect()
  }
}

main()

import { execSync } from 'node:child_process'
import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('stringify', async t => {
    const command = `${path.join(__dirname, 'bin', 'index.js')} ./src/100.jpg`
    const res = execSync(command)
    t.equal(res.toString(), 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAYHAv/EACcQAAEDAwQBAwUAAAAAAAAAAAECAwQFBhEABxIxIRMUIlFSYZGh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwEC/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECESH/2gAMAwEAAhEDEQA/AFjbCjUhdlUKZItyDUX3FPhfrRgsuY5AEn6J8d6oKqFts4IsCoW7TxPdZbQ4WGS0sOFIOQB15PZ1G9u94o9nW9Fpwt/3TzKVpU/7rhz5KKuuJ6z/ADTFP37jIWw+xQWHZCk5K/W+SB9ueOT+9ZbrMFipS6SLciCim3hPiNR0R0NEJDaU8QPHePz3o1i/7jRdd0Sau3DEMPpQC0F8sEJAJzgd4zo1UsQR/9k=\n',
        'should return the expected string')
})

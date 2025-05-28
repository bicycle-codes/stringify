#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import sharp from 'sharp'
import { fileTypeFromFile } from 'file-type'

const args = yargs(hideBin(process.argv))
    .demandCommand(1)
    .command('filename', 'the local filename to read')
    .option('size', {
        alias: 's',
        type: 'number',
        description: 'The width of the base64 image; default is 20'
    })
    .example('`npx stringify my-fiile.jpg`',
        'Create a small base64 string from a local file')
    .usage('Usage: stringify <filename>')
    .argv

const filename = args._[0]
const { size } = args
const uri = await getImgFromFile(filename, size)
process.stdout.write(uri + '\n')

async function getImgFromFile (filename, size = 20) {
    const buf = await sharp(filename)
        .resize(size)
        .jpeg()
        .toBuffer()

    const type = await fileTypeFromFile(filename)
    const { mime } = type!
    const base64 = buf.toString('base64')
    const dataUri = 'data:' + mime + ';base64,' + base64
    return dataUri
}

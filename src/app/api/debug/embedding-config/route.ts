import { NextResponse } from 'next/server';
import { getServerDefaultFilesConfig } from '@/server/globalConfig';
import { DEFAULT_FILE_EMBEDDING_MODEL_ITEM } from '@/const/settings/knowledge';
import { isDesktop } from '@/const/version';

export async function GET() {
    return NextResponse.json({
        serverConfig: getServerDefaultFilesConfig(),
        defaultConfig: DEFAULT_FILE_EMBEDDING_MODEL_ITEM,
        isDesktop,
        env: {
            ENABLED_OLLAMA: process.env.ENABLED_OLLAMA,
            OLLAMA_PROXY_URL: process.env.OLLAMA_PROXY_URL,
            DEFAULT_FILES_CONFIG: process.env.DEFAULT_FILES_CONFIG,
        }
    });
}
import OpenAI from 'openai';


export async function letschat(key:string, messages:any[]) {
    const response = await new OpenAI({apiKey: key, dangerouslyAllowBrowser: true}).chat.completions.create({
        messages: messages,
        model: 'gpt-4-turbo',
    })
    messages.push({role: 'assistant', content:response.choices[0].message.content})
    return messages
}
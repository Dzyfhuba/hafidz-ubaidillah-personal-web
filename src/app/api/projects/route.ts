import supabase from '@/helpers/supabase'
import { NextRequest } from 'next/server'
// import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: NextRequest) {
  try {
    const techStack = request.nextUrl.searchParams.get('tech')

    const { data } = await supabase
      .from('projects')
      .select('*, project_platforms(*, platforms(id, platform, icon)), project_tech_stacks(tech_stacks(id, text, icon))')

    if (!techStack) return Response.json(data)

    const dataResponse = techStack ?
      data?.filter(pre =>
        JSON.stringify(pre.project_tech_stacks)
          .toLocaleLowerCase()
          .includes(`${techStack.toLocaleLowerCase()}` || ''))
      : data

    return Response.json(dataResponse, { status: 200 })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}
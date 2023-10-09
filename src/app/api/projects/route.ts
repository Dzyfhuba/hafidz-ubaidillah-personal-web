import supabase from '@/helpers/supabase'
import { Json } from '@/types/supabase'
import { NextRequest } from 'next/server'
// import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: NextRequest) {
  try {
    const techStack = request.nextUrl.searchParams.get('tech')

    const { data } = await supabase
      .from('projects')
      .select('*, project_platforms(*, platforms(id, platform, icon)), project_tech_stacks(tech_stacks(id, text, icon))')

    if (!techStack) return Response.json(data)

    type typeData = {
      id: number;
      name: string | null;
      order: number | null;
      platforms: Json;
      status: string | null;
      tech_stack: Json;
      project_platforms: {
        id: number;
        link: string | null;
        platform_id: number | null;
        project_id: number | null;
        platforms: {
          id: number;
          platform: string | null;
          icon: string | null;
        } | null;
      }[];
      project_tech_stacks: {
        id: number;
        project_id: number | null;
        tech_stack_id: number | null;
        tech_stacks: {
          id: number;
          text: string | null;
          icon: string | null;
        } | null;
      }[];
    }[]


    const dataResponse = techStack ?
      data?.filter(pre =>
        JSON.stringify(pre.tech_stack)
          .toLocaleLowerCase()
          .includes(`"tech":"${techStack.toLocaleLowerCase()}"` || ''))
      : data

    return Response.json(dataResponse, { status: 200 })

    // const dataResponse = techStack ? data?.filter(pre => pre.tech_stack?.toString().includes(techStack || '')) : data

    return Response.json(JSON.stringify(data![0].tech_stack).toLocaleLowerCase().includes(techStack || ''), { status: 200 })
    return Response.json(JSON.stringify(data![0].tech_stack), { status: 200 })
  } catch (error) {

  }
}
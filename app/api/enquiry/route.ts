import { NextResponse } from "next/server";
import { prepareEnquiry } from "@/app/actions/enquiry";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const result = await prepareEnquiry(data);
    if (result.status === "sent") {
      return NextResponse.json({ success: true, message: result.message });
    }
    return NextResponse.json({ success: false, message: result.message }, { status: 400 });
  } catch (error) {
    console.error("[AST Enquiry API Route] Error processing request:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

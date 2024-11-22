import connectionToDatabase from "@/lib/mongoose";
import FormData from "@/models/FormData";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: true, // Enable body parsing since we're no longer handling files
  },
};

export async function POST(request) {
    try {
      await connectionToDatabase();

      const body = await request.json();

      // Ensure `languages` is stored as a string
      if (Array.isArray(body.languages)) {
        body.languages = body.languages.join(", ");
      }

      const { firstName, lastName, email, ...otherFields } = body;

      const newApplication = new FormData({
        firstName,
        lastName,
        email,
        ...otherFields,
      });

      await newApplication.save();

      return NextResponse.json(newApplication, { status: 201 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }


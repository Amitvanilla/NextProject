import {createDbConfig} from "@/app/dbConfig/dbConfig";
import {NextRequest, NextResponse} from "next/server";
import User from "@/app/model/user";

createDbConfig()

export async function POST(req: NextRequest, res: NextResponse) {
    try{
        const body = await req.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json({
                error: "Please enter all details!!",
                success: false,
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({
                error: "Email already exists",
                success: false,
            });
        }

        const newUser = new User({
            username: name,
            email: email,
            password: password,
        });

        await newUser.save();

        return NextResponse.json({
            message: "User registered successfully",
            success: true,
        });
    }
    catch(err){
        console.error(err);
    }
}


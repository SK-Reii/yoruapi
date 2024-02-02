import { MediaProps as Props } from "@/core/props";
import { supabase } from "@/core/lib/supabase";

class Media {

    private id: string;
    private type: Props.MediaType;

    constructor(id: string, type: Props.MediaType) {
        this.id = id;
        this.type = type;
    }

    public async exists(): Promise<boolean> {
        try {

            if (!this.id || !this.type) throw new Error("La ID y el tipo son necesarios para buscar la media y no se han proporcionado.");

            const type = this.type.toLocaleLowerCase();

            console.log(type);

            const { data, error } = await supabase.from(type).select("*")

            console.log(error);

            // if (error) throw new Error(error.message);
            // if (data) return true;

            return false;

        } catch (error) {

            console.error(error);
            return false;

        }
    }

}

export default Media;

import { Type } from '../components/SystemChat';
import { createCommand } from './commands/createCommand';
import { helpCommand } from './commands/helpCommand';
import { joinCommand } from './commands/joinCommand';
import { listCommand } from './commands/listCommand';
import { nickCommand } from './commands/nickCommand';
import { quitCommand } from './commands/quitCommand';
import { usersCommand } from './commands/usersCommand';

export async function handleCommand(command: string, args: string[], selectedChannel: number, userCookie: string): Promise<{ result: string; title: string; type?: Type | undefined; }> {
    console.log("command: " + command + ", args: [" + args + "], selectedChannel: " + selectedChannel, "userCookie: " + userCookie);

    switch (command) {

        case "help":
            return helpCommand();
        case "list":
            return listCommand(args, selectedChannel);
        case "nick":
            return nickCommand(args, userCookie);
        case "users":
            return usersCommand(selectedChannel);
        case "quit":
            return quitCommand(selectedChannel, userCookie);
        case "join":
            return joinCommand(args, userCookie);
        case "create":
            return createCommand(args);


        default:

            return {
                title: "Erreur",
                result: "Commande inconnue: " + command,
                type: Type.WARNING,
            }

    }
}

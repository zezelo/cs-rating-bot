import { Module } from "@nestjs/common";
import { CreateLobbyUseCase } from "./use-case/create-lobby.usecase";
import { UserRepository } from "@/core/repositories/user.repository";
import { FirestoreModule } from "@/core/firestore/firestore.module";
import { VoiceMemberUpdateUseCase } from "./use-case/voice-member-update.usecase";
import { DiscordModule } from "@/config/discord/discord.module";
import { ReceiveUserMessageUseCase } from "../team-finder/use-case/receive-user-message.usecase";
import { RegisterSlashCommandUseCase } from "../team-finder/use-case/register-slash-command.usecase";
import { EvaluatePlayerUseCase } from "../team-finder/use-case/evaluate-player.usecase";
import { AuthorizationUseCase } from "../team-finder/use-case/authorization.usecase";
import { ConfigureUseCase } from "../team-finder/use-case/configure.usecase";
import { InteractionCommandUseCase } from "./use-case/interaction-command.usecase";
import { RestModule } from "@/config/rest/rest.module";
import { GamersclubInformationUseCase } from "./use-case/gamersclub-information.usecase";
import { ConfigRepository } from "@/core/repositories/config.repository";
import { QueueUseCase } from "./use-case/queue.usecase";
import { QueueLoggingUseCase } from "./use-case/queue-logging.usecase";
import { CreateMatchUseCase } from "./use-case/create-match.usecase";

@Module({
  imports: [FirestoreModule, DiscordModule, RestModule],
  providers: [
    InteractionCommandUseCase,
    CreateLobbyUseCase, 
    VoiceMemberUpdateUseCase,     
    ReceiveUserMessageUseCase, 
    RegisterSlashCommandUseCase, 
    EvaluatePlayerUseCase,
    CreateLobbyUseCase,
    AuthorizationUseCase,
    ConfigureUseCase, 
    GamersclubInformationUseCase,
    UserRepository,
    ConfigRepository,
    QueueUseCase,
    QueueLoggingUseCase,
    CreateMatchUseCase
  ],
  exports: [CreateLobbyUseCase, VoiceMemberUpdateUseCase]
})
export class MatchmakingModule {}
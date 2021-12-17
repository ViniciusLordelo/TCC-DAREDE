using FunilariaDev.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace FunilariaDev.Repositories
{
    public class SendEmailRepository : ISendEmailRepository
    {

        private string PassEmail = "15w21a30";
        private string EmailRemetente = "irmaosfunilaria@gmail.com";

        public bool EnviarEmail(string emailDestinatario)
        {

            try
            {
                // Estancia da Classe de Mensagem
                MailMessage _mailMessage = new MailMessage();
                // Remetente
                _mailMessage.From = new MailAddress(EmailRemetente);

                // Destinatario seta no metodo abaixo

                //Contrói o MailMessage
                _mailMessage.CC.Add(emailDestinatario);
                _mailMessage.Subject = "Bem vindo à Funilaria 2 irmãos";
                _mailMessage.IsBodyHtml = true;
                _mailMessage.Body = "<b>Olá Tudo bem ?</b><p>Bem vindo(a) à Funilaria 2 irmãos, aqui você encontra os melhores preços para a manutenção de seu veículo!<p>";

                //CONFIGURAÇÃO COM PORTA
                SmtpClient _smtpClient = new SmtpClient("smtp.gmail.com", Convert.ToInt32("587"));

                //CONFIGURAÇÃO SEM PORTA
                // SmtpClient _smtpClient = new SmtpClient(UtilRsource.ConfigSmtp);

                // Credencial para envio por SMTP Seguro (Quando o servidor exige autenticação)
                _smtpClient.UseDefaultCredentials = false;
                _smtpClient.Credentials = new NetworkCredential(EmailRemetente, PassEmail);

                _smtpClient.EnableSsl = true;

                _smtpClient.Send(_mailMessage);

                return true;
            }catch(Exception er)
            {
                throw er;
            }
        }
    }
}
